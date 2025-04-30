// src/plugins/remark-responsive-tables-enhanced.ts
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Table, TableRow, TableCell, Parent } from "mdast";
import type { Node } from "unist";

interface CustomNode extends Node {
  type: string;
  name?: any;
  data?: {
    hName?: string;
    hProperties?: {
      className?: string[];
      "data-label"?: string;
    };
  };
  attributes?: {
    class?: string;
    "data-label"?: string;
  };
  children?: any[];
  position?: any;
}

/**
 * Enhanced remark plugin that:
 * 1. Wraps tables with responsive container
 * 2. Extracts header text
 * 3. Adds data-label attributes to cells for mobile card layout
 */
export const remarkResponsiveTables: Plugin = () => {
  return (tree) => {
    visit(
      tree,
      "table",
      (node: Table, index: number, parent: Parent | null) => {
        if (!parent || index === null) return;

        // Store header texts for data labels
        const headerTexts: string[] = [];

        // Process the table to extract header text
        if (node.children && node.children.length > 0) {
          // The first row is the header row
          const headerRow = node.children[0] as TableRow;

          if (headerRow?.children) {
            // Extract text from each header cell
            headerRow.children.forEach((cell: TableCell) => {
              // Get all text content from the cell
              let headerText = "";

              visit(cell, "text", (textNode: any) => {
                headerText += textNode.value;
              });

              headerTexts.push(headerText.trim());
            });
          }

          // Add data-label to each cell in the body rows
          if (node.children.length > 1) {
            // Skip the header row (index 0)
            for (let i = 1; i < node.children.length; i++) {
              const row = node.children[i] as TableRow;

              if (row?.children) {
                row.children.forEach((cell: CustomNode, cellIndex: number) => {
                  if (headerTexts[cellIndex]) {
                    // Add data-label property to the cell
                    if (!cell.data) cell.data = {};
                    if (!cell.data.hProperties) cell.data.hProperties = {};

                    cell.data.hProperties["data-label"] =
                      headerTexts[cellIndex];
                  }
                });
              }
            }
          }
        }

        // Create a wrapper container with the appropriate class
        const wrapper: CustomNode = {
          type: "containerDirective",
          name: "div",
          attributes: { class: "table-responsive table-cards" },
          children: [node],
          data: {
            hName: "div",
            hProperties: {
              className: ["table-responsive", "table-cards"],
            },
          },
        };

        // Replace the table with the wrapped version
        parent.children.splice(index, 1, wrapper as any);
      }
    );
  };
};

export default remarkResponsiveTables;

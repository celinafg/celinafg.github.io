export default function rehypeUnwrapImages() {
  return (tree) => {
    // Walk the tree and find paragraphs that contain only images
    const visit = (node, parent, index) => {
      if (node.type === "element" && node.tagName === "p") {
        const onlyImages = node.children.every(
          (child) =>
            (child.type === "element" && child.tagName === "img") ||
            (child.type === "text" && child.value.trim() === "")
        );

        if (onlyImages && parent && index !== undefined) {
          const images = node.children.filter(
            (child) => child.type === "element" && child.tagName === "img"
          );

          parent.children.splice(index, 1, ...images);

          // Skip processing the newly inserted nodes
          return index + images.length;
        }
      }

      // Process children recursively
      if (node.children) {
        let i = 0;
        while (i < node.children.length) {
          const result = visit(node.children[i], node, i);
          if (typeof result === "number") {
            i = result;
          } else {
            i++;
          }
        }
      }

      return undefined;
    };

    visit(tree);
  };
}

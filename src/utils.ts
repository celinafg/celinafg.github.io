const cloudinaryConfig = {
  cloudName: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  // Add other configuration options if needed
};

export function buildCloudinaryURL(
  publicId: string,
  transformations: string[] = []
) {
  const baseURL = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload`;

  // Join all transformations with commas
  const transformationString =
    transformations.length > 0 ? transformations.join(",") + "/" : "";

  return `${baseURL}/${transformationString}${publicId}`;
}

// Preset transformations for different use cases
export const imagePresets = {
  projectThumbnail: [
    "f_auto", // Automatic format selection
    "q_auto", // Automatic quality
    "c_fill", // Fill mode
    "w_800", // Width
    "h_450", // Height for 16:9 aspect ratio
  ],

  projectHero: ["f_auto", "q_auto", "c_fill", "w_1200", "h_675"],

  // Add more presets as needed
};

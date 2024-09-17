export default {
    name: "customImage",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      {
        title: "Image Alt Text",
        name: "alt",
        type: "string",
        options: {
          isHighlighted: true,
        },
      },
      {
        title: "Caption",
        name: "caption",
        type: "string",
      }
    ],
  };
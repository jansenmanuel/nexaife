export const IMPORT_INFOCARD_EXAMPLE = `import { INFOCARD_V_2_0_2 } from 'nexcomponent-ui';`;

export const USAGE_INFOCARD_EXAMPLE = `
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius vulputate eros, ut egestas ipsum imperdiet ut. 
                Quisque facilisis auctor efficitur. Nulla facilisi. Cras vel accumsan est. Sed fermentum nisi nunc, ac euismod justo vulputate mollis. 
                Phasellus aliquam urna sit amet nulla viverra fermentum. Vivamus aliquam varius mi at sollicitudin. Nunc a velit est. 
                Vivamus tincidunt vitae justo id dictum. Vivamus quis arcu massa. Nam libero odio, finibus sed aliquam sit amet, egestas eu nunc. 
                Praesent et sapien diam. Praesent imperdiet enim quis pellentesque ornare. Duis vitae arcu eget orci feugiat sodales. 
                Aliquam sed pharetra tellus. Duis vitae sodales sem. Mauris accumsan pretium felis in suscipit."

  <INFOCARD_V_2_0_2 
    id={"infocard6"} 
    description={desc} 
    closable={false} 
    state='information' 
  />
`;

export const INFOCARD_PROPS_DATA = [
  {
    key: "1",
    name: "id",
    desc: "Unique identifier for the information card component.",
    default: "-",
    type: "string",
    example: "infoCard1",
  },
  {
    key: "2",
    name: "state",
    desc: "Specifies the type of notification to be shown.",
    default: "'information'",
    type: "oneOf(['success', 'warning', 'information', 'error'])",
    example: "success",
  },
  {
    key: "3",
    name: "description",
    desc: "The content displayed within the notification.",
    default: "''",
    type: "string",
    example: "This is a notification message.",
  },
  {
    key: "4",
    name: "closable",
    desc: "Specifies whether the notification can be closed.",
    default: "true",
    type: "boolean",
    example: "false",
  },
  {
    key: "5",
    name: "width",
    desc: "Specifies the width of the notification.",
    default: "''",
    type: "string",
    example: "300px",
  },
];

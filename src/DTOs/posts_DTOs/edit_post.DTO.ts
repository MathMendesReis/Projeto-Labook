import z from "zod";
export interface edit_postDTOInput {
  id: string;
  content: string;
}
export interface edit_postDTOOutput {
  content: string;
}
export const edit_postDTOSchemma = z
  .object({
    id:z.string(),
    content:z.string()
  })
  .transform((data) => data as edit_postDTOInput);

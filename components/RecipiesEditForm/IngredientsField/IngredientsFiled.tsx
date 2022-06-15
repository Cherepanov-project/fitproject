import React from "react"
import { useField, FieldArray } from "formik"
import { Grid, Box, TextField, IconButton } from "@mui/material"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { IIngredient } from "../../../model/recipes/index"

interface IProps {
    name: string
}

const emptyIngredient = {
    name: "",
    description: "",
}

const IngredientsFiled: React.FC<IProps> = React.memo((props: IProps) => {
    const [field, meta, helpers] = useField(props.name)

    return (
        <FieldArray
            name={field.name}
            render={arrayHelpers => (
                <Grid container item alignItems="center" my={2} xs={12}>
                    {field.value
                        ? field.value.map(
                              (ingredient: IIngredient, index: number) => (
                                  <Grid
                                      container
                                      item
                                      direction="row"
                                      alignItems="center"
                                      sx={{ mr: 1, my: 2 }}
                                      xs={5}
                                      key={index}
                                  >
                                      <Box
                                          sx={{
                                              bgcolor: "#F5F5F5",
                                              borderRadius: 1.25,
                                          }}
                                          my={2}
                                      >
                                          <Grid
                                              container
                                              item
                                              direction="column"
                                              sx={{ p: 3, m: 1 }}
                                          >
                                              <Grid item sx={{ pb: 2 }}>
                                                  <TextField
                                                      fullWidth
                                                      id={field.name}
                                                      name={`ingredients.${index}.name`}
                                                      placeholder={"Name"}
                                                      onChange={field.onChange}
                                                      onBlur={field.onBlur}
                                                      variant="outlined"
                                                      defaultValue={
                                                          ingredient.name
                                                      }
                                                      sx={{
                                                          input: {
                                                              padding: "10px",
                                                          },
                                                          bgcolor: "#FFF",
                                                      }}
                                                  />
                                              </Grid>
                                              <Grid item>
                                                  <TextField
                                                      fullWidth
                                                      id={field.name}
                                                      name={`ingredients.${index}.description`}
                                                      placeholder={
                                                          "Description"
                                                      }
                                                      onChange={field.onChange}
                                                      onBlur={field.onBlur}
                                                      variant="outlined"
                                                      defaultValue={
                                                          ingredient.description
                                                      }
                                                      sx={{
                                                          input: {
                                                              padding: "10px",
                                                          },
                                                          bgcolor: "#FFF",
                                                      }}
                                                  />
                                              </Grid>
                                          </Grid>
                                      </Box>
                                  </Grid>
                              )
                          )
                        : null}
                    <Grid container item xs mr={-4}>
                        <IconButton
                            size="large"
                            onClick={() => arrayHelpers.push(emptyIngredient)}
                        >
                            <AddCircleOutlineIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                </Grid>
            )}
        />
    )
})

export default IngredientsFiled

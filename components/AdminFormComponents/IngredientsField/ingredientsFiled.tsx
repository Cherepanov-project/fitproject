import React from "react"
import { useField, FieldArray } from "formik"
import { Grid, Box, TextField, IconButton, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"

import { IIngredient } from "../../../models/recipes/recipes"
import { IProps } from "../../RecipesEditForm/recipesEditForm.interface"

const emptyIngredient = {
    name: "",
}

const IngredientsFiled: React.FC<IProps> = ({ name }) => {
    const [field, meta, helpers] = useField(name)

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
                                              bgColor: "#F5F5F5",
                                              borderRadius: 1.25,
                                          }}
                                          my={2}
                                      >
                                          {index === 0 ? null : (
                                              <Grid>
                                                  <IconButton
                                                      onClick={() =>
                                                          arrayHelpers.remove(
                                                              index
                                                          )
                                                      }
                                                  >
                                                      <CloseIcon color="error" />
                                                  </IconButton>
                                              </Grid>
                                          )}
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
                                                      value={field.value.name}
                                                      name={`ingredients.${index}.name`}
                                                      placeholder={"Name"}
                                                      onChange={field.onChange}
                                                      variant="outlined"
                                                      sx={{
                                                          input: {
                                                              padding: "10px",
                                                          },
                                                          bgColor: "#FFF",
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
                                                      variant="outlined"
                                                      value={
                                                          field.value
                                                              .description
                                                      }
                                                      sx={{
                                                          input: {
                                                              padding: "10px",
                                                          },
                                                          bgColor: "#FFF",
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
}

export default IngredientsFiled

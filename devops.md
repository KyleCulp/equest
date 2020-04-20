quick sketchup if i forget

drone runner to perform general repo stuff, then if a package is changed or something like that, it'll call the proper pipelines to build that image and handle it

example (each block its own pipeline): @equest/server changes -> lint/test pipeline -> build & upload image -> run helm config
`

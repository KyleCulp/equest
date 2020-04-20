quick sketchup if i forget

drone runner to perform general repo stuff, then if a package is changed or something like that, it'll call the proper pipelines to build that image and handle it

example (each block its own pipeline): @equest/server changes -> lint/test pipeline -> build & upload image -> run helm config
`

# Kubernetes Services:

Docker registry (w/ s3 spaces)

Verdaccio npm registry

Redis

@equest/server

@equest/worker

Drone Runner(s)

Game Parsers

# CI / CD Pipelines

Default: Lint, test, push
Default runs before anything else. If this fails, the entire pipeline halts

PackagePublic: build, deploy
PackagePublic builds & deploys packages to the internal github registry

ImageBuild: run dockerfile, upload image to image registry

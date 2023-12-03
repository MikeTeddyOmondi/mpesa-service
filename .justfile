# List commands
default:
  just --list

# Docker build image
build-image:
  docker build --pull -t ranckosolutionsinc/mpesa-service . 

# Docker Container
run-container:
  docker run -d -p 3000:3000 --name mpesa-service ranckosolutionsinc/mpesa-service 

# Docker compose
run-compose:
  docker compose up -d 

# Docker compose down
run-compose-down:
  docker compose down 

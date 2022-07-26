# Named Volumes in Docker


### What is Volume in Docker ?

In Docker, volumes are used to store data outside of the container. Volumes are folders created and managed by Docker that store data generated in your container.

### What are Named Volumes ?

Named volumes are used in Docker to persist data outside of a docker container because named volumes survive even after a container has been stopped and removed. Named Volumes are not attached to any particular container and hence can be used to share data across multiple containers

---

This example demonstrates how one can use named volumes to persist data and use it across multiple contianers. The idea of the project is to create two servers. One server generates a log file based on the requests received by it and the other server consumes that log file and processes it. 

## Setup

1. Clone the Project
```bash
git clone https://github.com/senshiii/docker-named-volumes-demo.git
```

2. Open a terminal

3. Navigate to the 
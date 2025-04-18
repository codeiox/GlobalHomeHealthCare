# GlobalHomeHealthCare

## Description

A web application that allows users to submit information via a frontend form. The backend API, built with C++ and the Crow framework, securely stores the submitted data in a MySQL database.

## Features

- RESTful API using the [Crow framework](https://crowcpp.org/master/)
- Secure data storage with MySQL
- Environment variable management using [cpp-dotenv](https://github.com/adeharo9/cpp-dotenv)
- Frontend developed with HTML, CSS, and JavaScript

## Prerequisites

Ensure the following are installed on your local machine:

- [MySQL](https://dev.mysql.com/downloads/)
- [C++ Compiler (g++, clang++)](https://gcc.gnu.org/)
- [Crow Framework](https://crowcpp.org/master/)
- [CMake](https://cmake.org/download/)
- [Git](https://git-scm.com/)
- [OpenSSL](https://www.openssl.org/)
- [cpp-dotenv](https://github.com/adeharo9/cpp-dotenv)

## Setup and Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/GlobalHomeHealthCare.git
cd GlobalHomeHealthCare
```
create .env file and included in your build folder 
you will need to add the following
```dotenv
DB_HOST=localhost
DB_NAME=your_database
DB_USER=your_username
DB_PASS=your_password
```

## Build the Project

```bash
mkdir -p cmake-build-debug
cd cmake-build-debug
cmake -DCMAKE_BUILD_TYPE=Debug ..
cmake --build .
```

## Running the Application

macOS

Make sure you're in build directory before running following command:
```bash
export DYLD_LIBRARY_PATH="/opt/homebrew/opt/openssl@3/lib" 
```
```bash
 sudo DYLD_LIBRARY_PATH="$DYLD_LIBRARY_PATH" ./executable
```

Linux
```bash
export LD_LIBRARY_PATH="/usr/local/openssl/lib"
```
```bash
sudo LD_LIBRARY_PATH="$LD_LIBRARY_PATH" ./executable
```


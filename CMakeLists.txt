cmake_minimum_required(VERSION 3.10)

# Set the project name
project(GLOBAL_HOME_HEALTH_CARE)

# Set the C++ standard
set(CMAKE_CXX_STANDARD 17)

set(CMAKE_CXX_STANDARD_REQUIRED ON)

#crow
find_package(Threads REQUIRED)

#openSSL
find_package(OpenSSL REQUIRED)

# Include directories (add the path to your CxxTest installation)
include_directories(/opt/homebrew/opt/cxxtest/include)

# include path to crow dependency
include_directories(/opt/homebrew/Cellar/crow/1.2.1.2/include)

# include path to asio dependency
include_directories(/opt/homebrew/Cellar/asio/1.30.2/include)

#include path to mysql connector/c++
include_directories(/usr/local/mysql-connector-c++-9.2.0/lib64)

# include path to mysql connector/c++
include_directories(/usr/local/mysql/include)
include_directories(/usr/local/mysql-connector-c++-9.2/include)




# Set the path to the cxxtestgen script
set(CXXTEST_TESTGEN_EXECUTABLE /opt/homebrew/opt/cxxtest/bin/cxxtestgen)

# Find CxxTest package
find_package(CxxTest REQUIRED)

# Enable testing
enable_testing()

# Add the executable for the restaurant project (make sure to include the source files)
add_executable(${PROJECT_NAME}
        main.cpp
        headers/Application.h
        src/Application.cpp
        src/Date.cpp
        headers/Date.h
        src/Time.cpp
        headers/Time.h
        headers/Application.h

)


#Add linker flags
if (CMAKE_CXX_COMPILER_ID MATCHES "Clang")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -pthread")
elseif (CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
    set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -lpthread")
endif()

link_directories(/usr/local/mysql-connector-c++-9.2.0/lib64)

# Link libraries
target_link_libraries(${PROJECT_NAME}
        PRIVATE
        Threads::Threads
        OpenSSL::SSL
        OpenSSL::Crypto
        /usr/local/mysql-connector-c++-9.2.0/lib64/libmysqlcppconn.dylib
        /usr/local/mysql-connector-c++-9.2.0/lib64/libmysqlcppconnx.dylib
)


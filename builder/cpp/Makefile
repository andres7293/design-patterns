CXX=g++
CXXFLAGS=-g -Wall -std=c++11

builder.out:	builder.o
	${CXX} ${CXXFLAGS} $^ -o $@

builder.o:	builder.cpp
	${CXX} ${CXXFLAGS} -c $^ -o $@

clean:
	rm -f *.o *.out

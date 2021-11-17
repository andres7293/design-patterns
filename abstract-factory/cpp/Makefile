CXX=g++
CXXFLAGS=-g -Wall -std=c++20

abstract-factory.out:	abstract-factory.o
	${CXX} ${CXXFLAGS} $^ -o $@

abstract-factory.o:	abstract-factory.cpp
	${CXX} ${CXXFLAGS} -c $^ -o $@

clean:
	rm -f *.o *.out

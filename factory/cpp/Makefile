CXX=g++
CXXFLAGS=-g -Wall -std=c++20

factory.out:	factory.o
	${CXX} ${CXXFLAGS} $^ -o $@

factory.o:	factory.cpp
	${CXX} ${CXXFLAGS} -c $^ -o $@

clean:
	rm -f *.o *.out

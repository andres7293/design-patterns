CXX=g++
CXXFLAGS=-g -Wall -std=c++20

composite.out:	composite.o
	${CXX} ${CXXFLAGS} $^ -o $@

composite.o:	composite.cpp
	${CXX} ${CXXFLAGS} -c $^ -o $@

clean:
	rm -f *.o *.out

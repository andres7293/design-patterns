CXX=g++
CXXFLAGS=-g -Wall -std=c++11

main.out:	main.o Singletton.o
	${CXX} ${CXXFLAGS} $^ -o $@

main.o: main.cpp
	${CXX} ${CXXFLAGS} -c $^ -o $@

Singletton.out:	Singletton.o
	${CXX} ${CXXFLAGS} $^ -o $@

singletton.o:	Singletton.cpp
	${CXX} ${CXXFLAGS} -c $^ -o $@

clean:
	rm -f *.o *.out

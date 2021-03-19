CC=g++
CPPFLAGS=-g -Wall -std=c++11

composite.out:	composite.o
	${CC} ${CPPFLAGS} $^ -o $@

composite.o:	composite.cpp
	${CC} ${CPPFLAGS} -c $^ -o $@

clean:
	rm -f *.o *.out

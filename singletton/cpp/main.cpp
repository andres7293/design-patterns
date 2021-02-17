#include <iostream>
#include "Singletton.H"
using namespace std;

int main (void) {
    Singletton *s1 = Singletton::getInstance();
    Singletton *s2 = Singletton::getInstance();

    cout << s1 << endl;
    cout << s2 << endl;
    return 0;
}

#include "Singletton.H"

Singletton* Singletton::instance = NULL;

Singletton* Singletton::getInstance() {
    if (Singletton::instance == NULL) {
        Singletton::instance = new Singletton();
    }
    return Singletton::instance;
}

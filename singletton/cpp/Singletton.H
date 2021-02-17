#ifndef __SINGLETON_H__
#define __SINGLETON_H__

#include <iostream>
using namespace std;

class Singletton {
    public:
        Singletton(Singletton &p) = delete;
        Singletton(Singletton &&p) = delete;
        Singletton& operator = (Singletton &s) = delete;
        static Singletton* getInstance();
        
    protected:
        static Singletton *instance;
    private:
        Singletton() {}
};

#endif

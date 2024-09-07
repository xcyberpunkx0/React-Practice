#include <iostream>

using namespace std;

int length(char in[]){
    int len = 0;
    for (int i = 0; in[i] != '\0'; i++)
    {
        len++;
    }
    return len;

}
bool checkpalindrome(char in[],int start,int end){
    if(in[0] == '\0' || in[1] == '\0')
        return true;
    if(start >= end)
        return true;
    if(in[start] == in[end])
        return checkpalindrome(in,start+1,end-1);
    else
        return false;
}

bool checkpalindrome(char in[]){
    int n = length(in);
    checkpalindrome(in,0,n-1);
    
}

int main(){
    char n[100];
    cout<<"Enter the string to check if it's palindrome : ";
    cin.getline(n,100);
    cout<<checkpalindrome(n);




}

#include<bits/stdc++.h>
using namespace std;
void tamGiac(float &a,float &b,float &c){
   cout<<"Nhap a:";
   cin>>a;
   cout<<"Nhap b:";
   cin>>b;
   cout<<"Nhap c:";
   cin>>c;

   while(a+b<=c || a+c<=b || b+c<=a){
    cout<<"Nhap lai 3 canh:"<<endl;
    cin>>a>>b>>c;
   }
}

void KT(float a,float b,float c){
    if(a==b || b==c || c==a){
        cout<<"Tam giac can";
    } else{
    cout<<"KO la tam giac can";}
}
float BK(float a,float b, float c){
    float r,p;
    p=(a+b+c)/2;
    r=sqrt(((p-a)*(p-b)*(p-c)/p));
    return r;

}

float Tinh(float a,float b,float c, float &k){
    float R=BK(a,b,c);
    float F=2022;
    for(int i=1;i<=k;i++){
        F+=1/pow(R,i);
    }
     return F;
}
int main() {
    float a,b,c;
    int M=2021605548;
    float k=(M%5)+5;
    tamGiac(a,b,c);
    KT(a,b,c);
    cout<<endl;
    cout<<"Ban kinh:"<<fixed<<setprecision(3)<<BK(a,b,c);
    cout<<endl;
    cout<<"Gia tri cua F:"<<fixed<<setprecision(3)<<Tinh(a,b,c,k);

    return 0;
}

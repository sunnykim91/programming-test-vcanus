# 1번


# 2번


# 3번 재귀함수를 통해서 factorial 해결
basecase를 Factorial(1) 일 때로 하여, Factorial함수를 재귀함수로 만든다. 
Factorial은 이전의 숫자와 자신의 숫자의 곱을 해야하기 때문에 
else 문에서 num과 이전의 숫자를 찾기 위해 Facotrial(num - 1)을 해준다.



# 4번 for문을 통해 Factorial 해결
자바스크립트에서는 함수를 부를 때 콜스택에 쌓는다. 3번 답에서 보면 Factorial(4)를 위해서
Factorial(3), Factorial(2), Factorial(1) 이 콜스택에 쌓이는 순간이 생긴다. 만약 이 4라는 숫자가 엄청 커지게되면 그만큼 콜스택에 쌓이는 함수도 많아진다. 그렇게 되면 어느 순간 스택오버플로우가 발생한다. 이를 위해서 함수를 저장하는 것이 아니라 temp라는 임시 변수에 계속 재할당 함으로써 문제를 해결한다.


# 5번
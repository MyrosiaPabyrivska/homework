# 1 1 2 3 5 8 13...
# recursion
def fib(n)
	return n<3?1:fib(n-1)+fib(n-2)
end

#simple function
def fibonachi(n)
	fib1=1;
	fib2=1;

if n == 1 && n == 2
	return 1
else
for i in 3...n+1
	temp=fib2;
	fib2=fib1+fib2
	fib1=temp;
end
end
return fib2
end

#puts fib(6)
puts fibonachi(6)
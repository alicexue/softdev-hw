

# Rewrite fib(n) to employ dynamic programming
def memoize(f):
    memo = {} #hashmap/dict for O(1) lookup
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-1) + fib(n-2)

print fib(5)
for i in range(5):
    print fib(i)

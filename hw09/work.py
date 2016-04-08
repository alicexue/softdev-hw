import time

def runtime(fn):
    def inner(arg):
        start = time.time()
        fn(arg)
        end = time.time()
        return "execution time: " + str(end - start)
    return inner

def get_name_arg(fn):
    def inner(arg):
        return fn.func_name + ": " + str(arg)
    return inner

# only one decorator at a time works?
#@get_name_arg
@runtime
def pt2(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n)
            for c in range(b+1,n)
            if a*a + b*b == c*c]

c1 = runtime(pt2)
c2 = get_name_arg(pt2)
print c1(6)
print c2(6)

print "\n"
print pt2(6)

c = [2, 4, 15, 5, 3]
d = [3, 2, 52, 1, 3]

def union(a,b):
    return a + [x for x in b if x not in a]

print union(c,d)

def intersection(a,b):
    return [x for x in a if x in b]

print intersection(c,d)

def setDiff(u,a):
    return [x for x in u if x not in a]

print setDiff(c,d)

def symmetricDiff(a,b):
    return setDiff(a,b) + setDiff(b,a)

print symmetricDiff(c,d)
    
def cartProduct(a,b):
    return [(x,y)
            for x in a
            for y in b]

print cartProduct(c,d)
            

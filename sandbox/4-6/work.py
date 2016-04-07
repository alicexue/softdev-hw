
# 1. pt(n) returns list of pythagorean triples in interval 1 to n
# pt(3) -> []
# pt(4) -> []
# pt(6) -> [[3,4,5]]
# pt(7) -> [[3,4,5]]
def pt(n):
    l = []
    for a in range(1,n):
        for b in range(a+1,n):
            for c in range(b+1,n):
                if a*a + b*b == c*c:
                    l.append([a,b,c])
    return l
            
print pt(6)
print pt(26)


# 2. pt2(n) using list comp
def pt2(n):
    return [(a,b,c)
            for a in range(1,n)
            for b in range(a+1,n)
            for c in range(b+1,n)
            if a*a + b*b == c*c]

print pt2(6)
print pt2(26)


# 3. quicksort
def qsort(l):
    if len(l) == 0:
        return l
    piv = l[0]
    left = [x for x in l if x < piv]
    right = [x for x in l if x > piv]
    samepiv = [x for x in l if x == piv]
    return qsort(left) + samepiv + qsort(right)
    

print qsort([5, 3, 2, 6, 72, 3, 43, 6, 16, 62, 43, 26])

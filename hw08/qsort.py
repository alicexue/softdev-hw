# Quicksort using list comprehension

def qsort(l):
    if len(l) == 0:
        return l
    piv = l[0]
    left = [x for x in l if x < piv]
    right = [x for x in l if x > piv]
    samepiv = [x for x in l if x == piv]
    return qsort(left) + samepiv + qsort(right)
    

a = [5, 3, 2, 6, 72, 3, 43, 6, 16, 62, 43, 26]
print a
print qsort(a)

b = [62, 32, 62, 12, 34, 75, 23, 64, 32, 17, 42]
print b
print qsort(b)

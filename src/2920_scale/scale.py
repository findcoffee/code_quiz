# https: // www.acmicpc.net/problem/2920

a = list(map(int, input().split(' ')))

asc = True
desc = True

for i in range(1, 8):
    if a[i] > a[i - 1]:
        desc = False
    elif a[i] < a[i - 1]:
        asc = False

if asc:
    print('asc')
elif desc:
    print('desc')
else:
    print('mix')

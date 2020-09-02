# https: // www.acmicpc.net/problem/2920

def scale(arg):
    a = list(map(int, arg.split(' ')))

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


scale('1 2 3 4 5 6 7 8')
scale('1 2 3 4 5 6 8 7')
scale('8 7 6 5 4 3 2 1')
scale('8 7 6 5 4 3 1 2')
scale('3 2 1 4 5 6 7 8')
scale('8 2 3 4 5 6 7 1')


bestPair = (0,0)
minCostSoFar = float('inf')
for x in range (1,201):
    
    if ((250-x) < 100):
        print("break at y = ", (250-x))
        break;
    else:
        totalCost = 40*x + 30*(250-x)
        print('x:', x, 'y:', (250-x), 'totalCost:', totalCost)
        if (totalCost < minCostSoFar):
            minCostSoFar = totalCost
            bestPair = (x, (250-x))
print ("bestPair: ",bestPair,"min.Cost = ",minCostSoFar)
    
import cv2
import numpy as np
from cv2 import waitKey, matchTemplate, threshold



img_ori = cv2.imread("chrome.png")
img_gray = cv2.cvtColor(img_ori,cv2.COLOR_BGR2GRAY)
img_tmp = cv2.imread("temp.png",0)
#w, h = img_tmp.shape[::-1]

detected = np.where(cv2.matchTemplate(img_gray,img_tmp,cv2.TM_CCOEFF_NORMED) >= 0.90)

failResult = "(array([], dtype=int64), array([], dtype=int64))"
detected = str(detected)
#threshold = 0.90
#loc = np.where(res >= 0.90)

#for pt in zip(*abc[::-1]):
    #cv2.rectangle(img_ori,pt,(pt[0]+w,pt[1]+h), (0,255,255),2)
    
#cv2.imshow('detected', img_ori)
f = open("result.txt","w")
if detected == failResult:
    print "Fail"
    f.write("Fail")
else:
	#print detected
	print "Pass"
	f.write("Pass")
waitKey(0)
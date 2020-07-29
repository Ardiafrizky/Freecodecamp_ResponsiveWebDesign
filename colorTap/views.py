from django.shortcuts import render
import pprint, random
# Create your views here.
def getColorTapPage(request):
    return render(request, 'colorTap/colorTapPage.html')


board = []
k =0
with open("board_bios.tsv", "r") as ins:
    for line in ins:
    	if k == 0:
    		k+=1
    		continue
    	board.append(line)
lines = []
endlines =[]
fulltext = ""
j=0
with open("boardscrape.html", "r") as f:
	for line in f:
		if(line.strip() == "here"):
			lines.append("\n")
			fulltext +="".join(lines)
		if(j<=40):
			lines.append(line)
		else:
			endlines.append(line)
		j+=1
i=0
mem = ''
for member in board:

	# temp = (member.strip()).split("\t")
	# mem = ' <div class ="grid-box">\n\t <img height="375" src="images/board/'+ temp[9] +'.jpg">' +'\n\t<div class="header hidden">\n'
	# mem += ("\t\t<b>" + temp[1]+"</b><br>\n\t\t") #B
	# mem +="<position>"+ temp[10]+"</position>\n\t\t"
	# #mem +="<p> "+ temp[11]+ " - "+ temp[2]+" </p>\n"
	# mem += "<p> " + temp[2] + " </p>\n" #C
	# mem +='\t</div>\n <div class="info hidden">'
	# mem +="\n\t<p><b>Hometown: </b>"+ temp[3]+"</p>" #D
	# mem +="\n\t<p><b>Hobbies: </b>"+ temp[4]+"</p>" #E
	# mem +="\n\t<p><b>Obsessions: </b>"+ temp[5]+"</p>" #F
	# mem +="\n\t<p><b>Fun Fact: </b>"+ temp[6]+"</p>" #G
	# mem +="\n\t<p><b>Other Cal Poly Involvements: </b>"+ temp[7]+"</p>" #H
	# mem +="\n\t<p><b>Favorite thing about CSA: </b>"+ temp[8]+"</p>" #I
	# mem +="\n  </div>"
	# mem +="\n</div>\n"
	

	temp = (member.strip()).split("\t")
	mem =''
	if (i%3 == 0):
		mem +='<div style="width:96%; display: block; float: left;">\n\t'
	mem += '<div class="board-member-container">\n\t\t<img width="90%" src="images/board/'+ temp[9] +'.jpg" />\n\t\t'
	mem += '<div style="width: 100%; font-size: 1.5em;" >\n\t\t\t'
	mem += '<h3 style="margin-top: 10px;">' + temp[1] + '</h3>\n\t\t\t'
	mem += '<p class="title">' + temp[10] + '</p>\n\t\t\t'
	mem += '<p class="major-year">' + temp[2] + ' </p>\n\t\t'
	mem += '</div>\n\t\t'
	mem += '<div class="board-info">\n\t\t\t'
	mem += '<p><b>Hometown: </b>' + temp[3] + '</p>\n\t\t\t'
	mem += '<p><b>Hobbies: </b>'+ temp[4]+'</p>\n\t\t\t'
	mem += '<p><b>Obsessions: </b>'+ temp[5]+'</p>\n\t\t\t'
	mem += '<p><b>Fun Fact: </b>'+ temp[6]+'</p>\n\t\t\t'
	mem += '<p><b>Other Cal Poly Involvements: </b>'+ temp[7]+'</p>\n\t\t\t'
	mem += '<p><b>Favorite thing about CSA: </b>'+ temp[8]+'</p>\n\t\t'
	mem += '</div>\n\t'
	mem += '</div>\n\t'
	if ((i-2)%3 == 0):
		mem += '</div>\n'






	fulltext += mem
	i+=1
for x in endlines:
	fulltext+=x
f  = open("board.html", "w")
f.write(fulltext)
f.close()
print(fulltext)

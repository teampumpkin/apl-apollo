count=1
for f in *.png; do 
    mv -- "$f" "product-${count}.png";
   count=$((count+1))
done

for f in *.svg; do 
    mv -- "$f" "product-1920-${count}.svg";
   count=$((count+1))
done

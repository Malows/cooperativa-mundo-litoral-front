for file in *.png
do
    cwebp -q 95 "$file" -o "$file.webp"
done

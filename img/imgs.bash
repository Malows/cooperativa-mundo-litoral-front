for file in slide*
do
    cwebp -q 85 "$file" -o "$file.webp"
done

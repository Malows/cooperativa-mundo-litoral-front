for file in *
do
    cwebp -q 100 "$file" -o "${file%.*}.webp"
done

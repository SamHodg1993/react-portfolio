echo "Switching to main branch -'Main'"
git checkout main

echo "Building App..."
npm run build

echo "Deploying files to server..."
scp -r build/* sam@sams-apps.co.uk:/var/www/sams-apps.co.uk/

echo "Done!"
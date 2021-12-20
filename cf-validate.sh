echo "Starting validation..."
aws cloudformation validate-template --template-body file://./.aws/andrewmaier.dev.template --profile personal
echo "Validation complete."
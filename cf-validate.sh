echo "Starting validation..."
echo "--Main Template--"
aws cloudformation validate-template --template-body file://./.aws/andrewmaier.dev.template --profile personal
echo "--Certificate Template--"
aws cloudformation validate-template --template-body file://./.aws/andrewmaier.dev-acm.template --profile personal
echo "KSK Template"
aws cloudformation validate-template --template-body file://./.aws/andrewmaier.dev-dns-ksk.template --profile personal
echo "--DNS Template--"
aws cloudformation validate-template --template-body file://./.aws/andrewmaier.dev-dns.template --profile personal
echo "Validation complete."
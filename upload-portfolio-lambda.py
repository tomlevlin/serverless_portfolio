import boto3
from botocore.client import Config
import StringIO
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:eu-west-1:164764295482:New-serverless-portfolio-build')

    try:
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

        portfolio_bucket = s3.Bucket('portfolio.tle.guru')
        build_bucket = s3.Bucket('portfoliobuild.tle.guru')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print "New build uploaded"
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed successfully!")

    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="The portfolio was not deployed succesfully.")
        raise

    return 'All done!'

# target-portal

### Overview

The multi-phased Toxicant Exposures and Responses by Genomic and Epigenomic Regulators of Transcription (TaRGET) Program addresses the role of the environment in disease susceptibility as a function of changes to the epigenome. The goals are to enhance our understanding of the relationship between exposure-induced perturbations of epigenetic marks in target versus surrogate tissues; determine conditions where these studies will be valid; and aid in the interpretation of the results of such studies.

---

### System Requirements

This data portal is a react (v18.2.0) app that requires only a standard computer to develop and compile the code. The compiled code can be hosted on any webhosting services. Below are the minimum hardware requirements.
RAM: 16+ GB
CPU: 4+ cores, 3.3+ GHz/core

We use AWS S3 storage to store all the raw and processed datasets for all the samples. The metadata pertaining to each sample and their corresponding dataset URIs are available as json file that is indexed via elasticsearch. The Frontend react app queries the elasticsearch and renders the relevant visualization and displays available datasets. The app's logic handles user queries for search and downloads.

### Setup Elasticsearch

> These instructions assume the development environment is macos and for local testing. The code has been tested on Elasticsearch Version: 8.4.2, JVM: (18.0.2.1). For cloud based setup of elasticsearch, please follow the instructions on https://aws.amazon.com/opensearch-service/

- Download the elasticsearch `.tar.gz` for your os from : https://www.elastic.co/docs/deploy-manage/deploy/self-managed/install-elasticsearch-from-archive-on-linux-macos

```
curl -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.4.2-darwin-x86_64.tar.gz
curl https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.4.2-darwin-x86_64.tar.gz.sha512 | shasum -a 512 -c -
tar -xzf elasticsearch-8.4.2-darwin-x86_64.tar.gz

```

- Edit the config file (elasticsearch-8.4.2/config/elasticsearch.yml) with below settings for local development. It sets cors, headers, disables https and other security features not necessary for local development and testing. remember to save the edits.

```
# Enable cors
http.cors.enabled: true
http.cors.allow-credentials: true
http.cors.allow-origin: /https?:\/\/(localhost)?(127.0.0.1)?(:[0-9]+)?/
http.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept

# Enable security features
xpack.security.enabled: false

xpack.security.enrollment.enabled: false

# Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents
xpack.security.http.ssl:
  enabled: false
  keystore.path: certs/http.p12

# Enable encryption and mutual authentication between cluster nodes
xpack.security.transport.ssl:
  enabled: false
  verification_mode: certificate
  keystore.path: certs/transport.p12
  truststore.path: certs/transport.p12

```

- launch elasticsearch

```
cd elasticsearch-8.4.2/bin/
./elasticsearch
```

- Confirm elasticsearch is online by going to any web browser, for example chrome and type in `localhost:9200`, you should see an output like below.

```
{
name: "MacBook-Pro.local",
cluster_name: "elasticsearch",
cluster_uuid: "sPsHPyphQd2ihWivDhn1gw",
version: {
number: "8.4.2",
build_flavor: "default",
build_type: "tar",
build_hash: "89f8c6d8429db93b816403ee75e5c270b43a940a",
build_date: "2022-09-14T16:26:04.382547801Z",
build_snapshot: false,
lucene_version: "9.3.0",
minimum_wire_compatibility_version: "7.17.0",
minimum_index_compatibility_version: "7.0.0"
},
tagline: "You Know, for Search"
}

```

- When you first launch elasticsearch you will see something like below outputted to your terminal. This is used for programmatic access to elasticseach and contains instructions to link kibana tool if installed, which is part of the ELK stack that offers a (GUI) to interact with the elasticsearch and much more. To setup kibana, follow the instructions here: https://www.elastic.co/docs/deploy-manage/deploy/self-managed/install-kibana-from-archive-on-linux-macos. However, all we need at this point is the default username "elastic" and its password "16V0Iy3AKdXPh7Qj8QOA".

```
✅ Elasticsearch security features have been automatically configured!
✅ Authentication is enabled and cluster connections are encrypted.

ℹ️  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
  16V0Iy3AKdXPh7Qj8QOA

ℹ️  HTTP CA certificate SHA-256 fingerprint:
  b821612322cc5a4c7a8c7791abab1d8495a33814841fab38e5b76aea2e4a9df8

ℹ️  Configure Kibana to use this cluster:
• Run Kibana and click the configuration link in the terminal when Kibana starts.
• Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjQuMiIsImFkciI6WyIxMC4xMS4xMjUuODc6OTIwMCJdLCJmZ3IiOiJiODIxNjEyMzIyY2M1YTRjN2E4Yzc3OTFhYmFiMWQ4NDk1YTMzODE0ODQxZmFiMzhlNWI3NmFlYTJlNGE5ZGY4Iiwia2V5IjoiZVRFTk5Ka0JRTDlFOFB4V3ZmNGU6WXBRamlBOFdSTmFvUmRyRDhMMnFyQSJ9

ℹ️  Configure other nodes to join this cluster:
• On this node:
  ⁃ Create an enrollment token with `bin/elasticsearch-create-enrollment-token -s node`.
  ⁃ Uncomment the transport.host setting at the end of config/elasticsearch.yml.
  ⁃ Restart Elasticsearch.
• On other nodes:
  ⁃ Start Elasticsearch with `bin/elasticsearch --enrollment-token <token>`, using the enrollment token that you generated.
```

- We need to setup frontend now before connecting it to elasticsearch. lets keep the elasticsearch running. Do not kill the process.

### Setup Frontend App

- clone this github repository.

```
git clone https://github.com/twlab/target-portal.git
```

- Edit the provided .env file with your elasticsearch login credentials. VITE_ESCREDENTIALS should contain the login credentials we generated while setting up the elasticsearch above. You can reset it via `bin/elasticsearch-reset-password -u elastic` in case you lost it. These values let the frontend know where to look for data to retrieve and render.

```
VITE_ESCLUSTER=http://localhost:9200/
VITE_ESINDEX=target
VITE_ESCREDENTIALS=elastic:16V0Iy3AKdXPh7Qj8QOA
```

- Install the necessary packages.

```
cd target-portal
npm install
```

- Install the elasticseach python sdk. We will use it to add data to our elasticsearch instance locally.

```
pip install elasticsearch
```

- Lets add some datasets to the elasticsearch so that the portal can render it. use the provided script `target-portal/scripts/postElasticData.py` and the test dataset `target-portal/scripts/data/test.json`

```
cd target-portal/scripts/
python postElasticData.py ./data/test.json
```

- you should see a response like below after execution. Make sure elasticsearch is running, otherwise the script will fail.

```
ObjectApiResponse({'name': 'MacBook-Pro.local', 'cluster_name': 'elasticsearch', 'cluster_uuid': 'sPsHPyphQd2ihWivDhn1gw', 'version': {'number': '8.4.2', 'build_flavor': 'default', 'build_type': 'tar', 'build_hash': '89f8c6d8429db93b816403ee75e5c270b43a940a', 'build_date': '2022-09-14T16:26:04.382547801Z', 'build_snapshot': False, 'lucene_version': '9.3.0', 'minimum_wire_compatibility_version': '7.17.0', 'minimum_index_compatibility_version': '7.0.0'}, 'tagline': 'You Know, for Search'})
TGTEXP00A4WVT   created
TGTEXP01NLJOE   created
```

- Now, start the frontend app.

```
cd target-portal/
npm run dev
```

- Now go to `http://localhost:5173/explore` to see the samples we just added to the elasticsearch on the data portal.

---

### Deployment to AWS for Production build.

- update the config for production, based on AWS credentials.

```
VITE_ESCLUSTER=<AWS-ELASTICSEARCH-INSTANCE>
VITE_ESINDEX=target
VITE_ESCREDENTIALS=admin:<ADMIN-PASSWORD-GOES-HERE>
```

- npm run build
- If you set up the aws login credentials, then run below command
  - `aws s3 sync dist s3://data.targetepigenomics.org`
- If `aws s3 sync` doesn't work. You can manually login to the aws and upload all the files in dist manually.
- To see the changes reflect on the production website immediately, you need to create an invalidation on AWS portal within the cloudfront service that is hosting the data.targetepigenomics.org website (type `/*` within the invalidation field and once it is done processing, hard refresh the website in your browser). Otherwise, the changes you made will take slightly longer (~24hrs) to propagate.

### Creating, Reading, Updating and Deleting entries in the elasticsearch index

- Relevant portal data and scripts are available under `/scripts`
- Creating the Index on Elasticsearch using Kibana Devtools
  - `python convertElasticIndexToBulk.py ./data/portal_all.json > ./data/bulkpost.jsonl`
- Now login to AWS and then from the Kibana devtools console, bulk post all the entries that are in bulkpost.jsonl. Below is an example for a valid kibana post query. Note: sometimes the server can't handle, say all 3000+ entries, due to the query length restrictions, so bulk post maybe 300 entries (~600 lines in bulkpost.jsonl) at a time.

```
POST /target/doc/_bulk
{"index": {"_id": "TGTEXP00A4WVT"}}
{"experiment_id": "TGTEXP00A4WVT", "internal_id": "TGT23", "sex": "Male", "exposure": "BPA10mg", "tissue": "Liver", "lab": "Bartolomei", "assay": "ATAC", "downloads": [{"filesize": "1562M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/5c6362b15ffef25a6c53684b.bam", "filetype": "bam"}, {"filesize": "260M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/5c6362b15ffef25a6c53684b.bigWig", "filetype": "bigWig"}, {"filesize": "9M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/5c6362b15ffef25a6c53684b.narrowPeak", "filetype": "narrowPeak"}, {"filesize": "1137K", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/multiqc_report.html", "filetype": "multiqc_report.html"}, {"filesize": "239M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/step3.2_rmbl_5c6362b15ffef25a6c53684b.PE.R1.bigWig", "filetype": "PE.R1.bigWig"}, {"filesize": "2G", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/step3.3_rmbl_5c6362b15ffef25a6c53684b.PE.R1.open.bed", "filetype": "PE.R1.open.bed"}, {"filesize": "10M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/step3.4_peakcall_5c6362b15ffef25a6c53684b.PE.R1_peaks.xls", "filetype": "PE.R1_peaks.xls"}, {"filesize": "7M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/step3.4_peakcall_5c6362b15ffef25a6c53684b.PE.R1_summits.bed", "filetype": "PE.R1_summits.bed"}, {"filesize": "136M", "fileurl": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/step4.2_insertion_site_5c6362b15ffef25a6c53684b.PE.R1.bigWig", "filetype": "PE.R1.bigWig"}], "exposure_dose": "10 MG/KGBW/DAY", "exposure_paradigm": "Dams were exposed to treatment of 10 MG/KGBW/DAY BPA 2 weeks before breeding, through food/water. Offspring were exposed to treatment through the dam from conception to weaning.", "strain": "C57BL/6J", "marker": "", "jsonURL": "https://s3-obs1.htcf.wustl.edu/atac/0baf0fb4-2410-4d46-a1dd-e47fdfba091c/5c6362b15ffef25a6c53684b/5c6362b15ffef25a6c53684b.json", "affiliation": "University of Pennsylvania", "exposure_name": "bisphenol A", "age": "3 weeks"}
```

### Useful Kibana devtools console queries

- Show all the existing entries on the index.

```
GET /target/_search
{
  "query": {
    "match_all": {}
  }
}
```

- Delete the entire index. Be very cautious in using this. All data will be lost on elasticsearch upon execution.

```
DELETE target
```

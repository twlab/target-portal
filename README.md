# target-portal

The multi-phased Toxicant Exposures and Responses by Genomic and Epigenomic Regulators of Transcription (TaRGET) Program addresses the role of the environment in disease susceptibility as a function of changes to the epigenome. The goals are to enhance our understanding of the relationship between exposure-induced perturbations of epigenetic marks in target versus surrogate tissues; determine conditions where these studies will be valid; and aid in the interpretation of the results of such studies.

---

### Setup

- Create a .env file with below values. VITE_ESCREDENTIALS is the login credentials for the elasticsearch or opensearch on AWS. You can reset it via WashU's AWS portal.

```
VITE_ESCLUSTER=https://search-targetdcc2-5p3yhnwsetbttmdmpvto6vefg4.us-east-1.es.amazonaws.com
VITE_ESINDEX=target
VITE_ESCREDENTIALS=
```

- Install the necessary packages.

```
npm install
npm run dev
```

### Deployment

- npm run build
- If you set up the aws login credentials, then run below command
  - `aws s3 sync dist s3://data.targetepigenomics.org`
- If `aws s3 sync` doesn't work. You can manually login to the aws and upload all the files in dist manually.
- To see the changes reflect on the production website immediately, you need to create an invalidation on AWS portal within the cloudfront service that is hosting the data.targetepigenomics.org website (type `/*` within the invalidation field and once it is done processing, hard refresh the website in your browser). Otherwise, the changes you made will take slightly longer (~24hrs) to propagate.

### Creating, Reading, Updating and Deleting entries in the elasticsearch index

- Relevant portal data and scripts are available under `/scripts`
- Creating the Index on Elasticsearch
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

- Delete the entire index. Be very cautious in using this.

```
DELETE target
```

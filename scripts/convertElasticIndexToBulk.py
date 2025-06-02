#!/bin/python

# author : Prashant Kuntala
# last updated : June 2nd, 2025 

"""
Program to convert the portal_all.json to a format that is useful for bulk posting to AWS elasticsearch instance.
See this video tutorial for more info: https://www.youtube.com/watch?v=HtE3lljzOUU
seek to : 12:51

Usage:

python convertElasticIndexToBulk.py ./data/portal_all.json > ./data/bulkpost.jsonl

"""


import argparse
import pprint
import json
import os

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Program to generate the json for bulk posting to AWS Elasticsearch')
    parser.add_argument('fentries',help='path to the final elastic entries.')
    args = parser.parse_args()

    # read the final portal json
    with open(args.fentries,'r') as f:
        data = json.load(f)

    # Create the bulk index notation for each item
    elastic_index = {"index": {"_id": ""}}

    for item in data:
        elastic_index["index"]["_id"] = item['experiment_id']
        print(json.dumps(elastic_index))
        print(json.dumps(item))
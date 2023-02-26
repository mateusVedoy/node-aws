# Node AWS

## What is it for
It's a sample of how to connect, publish and consume messages on a mocked AWS queue using containers.

## How to Run it

OBS: You must to be on root folder *node-aws/*

### Application

#### Locally

```
npm run start
```

#### Containered

```
docker build .

docker run -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro  <generated build tag>
```

### Moked AWS queue:

```
docker compose up
```

## How to use it

### Publishing messages on queue

Endpoint:

```
/aws/publish
```

Payload: 

```
{
	"message": "Something you want to publish"
}
```

OBS: You can pass json object as well

```
{
	"message": {
		"repository": {
			"name": "node-aws",
			"description": "Sample of how to use AWS queues"
		}
	}
}
```

OBS: You MUST ALWAYS pass the property **message**

### Success message

Example:
```
{
	"Report": "Message succesfully published",
	"messageId": "eb59dbcb-ce58-4442-8c41-12b955ed24d4"
}
```

### Consuming messages on queue

Endpoint:

```
/aws/consume
```

### Response example

With no one message on queue

```
{
	"Report": "Messages to be consumed bellow"
}
```

With one or more messages on queue

```
{
	"Report": "Messages to be consumed bellow",
	"Messages": [
		{
			"MessageId": "eb59dbcb-ce58-4442-8c41-12b955ed24d4",
			"ReceiptHandle": "eb59dbcb-ce58-4442-8c41-12b955ed24d4#f2894d8b-82ce-44cc-83ac-3662e2c9ac0b",
			"MD5OfBody": "c33e08a0f902e3f8170ff7c9a4d94eb8",
			"Body": "{\"repository\":{\"name\":\"node-aws\",\"description\":\"Sample of how to use AWS queues\"}}"
		}
	]
}
```
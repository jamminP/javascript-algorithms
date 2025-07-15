function Node(data){
    this.data = data;
    this.prev = null;
    this.next = null;
}

function DoubleLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubleLinkedList.prototype.append = function (value){
    let node = new Node(value);
    
    if(this.head === null){
        this.head = node;
        this.tail = node;
    }else{
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    
    this.length++;
}

DoubleLinkedList.prototype.remove = function (node){
    if(!node)
        return;
    
    if(node === this.head && node === this.tail){
        this.head = null;
        this.tail = null;
    } else if(node === this.head){
        this.head = node.next;
        this.head.prev = null;
    } else if(node === this.tail){
        this.tail = node.prev;
        this.tail.next = null;
    } else{
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    
    
    this.length--;
}

function solution(cacheSize, cities) {
    var answer = 0;
    const list = new DoubleLinkedList();
    const cacheMap = new Map();
    
    for(let city of cities){
        city = city.toLowerCase();
        
        if(cacheSize === 0){
            answer += 5;
            continue;
        }
        
        //1. cache Hit
        if(cacheMap.has(city)){
            answer += 1;
            const node = cacheMap.get(city);
            list.remove(node);
            list.append(city);
            cacheMap.set(city, list.tail);
        } // 2. cache miss
        else{
            answer += 5;
            
            if(list.length >= cacheSize){
                const oldNode = list.head;
                list.remove(oldNode);
                cacheMap.delete(oldNode.data);
            }
            list.append(city);
            cacheMap.set(city, list.tail);
        }
    }
    
    return answer;
}
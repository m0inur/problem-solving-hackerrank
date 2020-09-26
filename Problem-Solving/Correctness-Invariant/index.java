public static void insertionSort(int[] A){
        for(int i = 0; i < A.length; i++){
            for(int j = i; j < A.length; j++){
                if(A[i] > A[j]){
                    int temp = A[i];
                    A[i] = A[j];
                    A[j] = temp;
                }
            }
        }

        printArray(A);
    }
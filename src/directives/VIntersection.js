export default {
    mounted(el, binding) { // директива принимает элемент из которого была вызвана и объект binding, в который можно передать объект с данными 
                   
            const options = {
                rootMargin: "0px",
                threshold: 1.0,
            };
            const callback = (entries, observer) => { // функция, отрабатывающая при пересечении
                if (entries[0].isIntersecting) { // проверка на то, был ли пересечен элемент и отсечка лишних запросов
                    binding.value.loadMorePosts()
                }
            
            };
            const observer = new IntersectionObserver(callback, options); // функция, отслеживающая пересечение
            observer.observe(el)
    },
    name: 'intersection',
}
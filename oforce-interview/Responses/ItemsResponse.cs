﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace oforce_interview.Responses
{
    public class ItemsResponse<T> :SuccessResponse
    {
        public List<T> Items { get; set; }



    }
}
